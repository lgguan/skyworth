import React, { Component } from 'react';
import { Button, Input, Field, Select, DatePicker, TimePicker, Checkbox } from '@alifd/next';
import PropTypes from 'prop-types';
import withRef from './withRef';
import './main.scss';

const RenderToolBar = (props) => {
  const { config, field } = props;
  return config.map((item, index) => {
    if (item.component === 'Button') {
      return <RenderButton key={index} item={item} />
    }
    else if (item.component === 'Input') {
      return <RenderInput key={index} item={item} field={field} />
    }
    else if (item.component === 'Select') {
      return <RenderSelect key={index} item={item} field={field} />
    }
    else if (item.component === 'DatePicker') {
      return <RenderDatePicker key={index} item={item} field={field} />
    }
    else if (item.component === 'TimePicker') {
      return <RenderTimePicker key={index} item={item} field={field} />
    }
    else if (item.component === 'CheckBox') {
      return <RenderCheckbox key={index} item={item} field={field} />
    }
    else {
      return <RenderNotSupport key={index} item={item} />
    }
  });
}

const RenderButton = (props) => {
  const { item } = props;
  return (
    <div className="tool-item">
      <Button
        type="primary"
        className="tool-button"
        {...item.componentProps}
      >
        {item.label}
      </Button>
    </div>
  );
}

const RenderInput = (props) => {
  const { item, field } = props;
  return (
    <div className="tool-item">
      <span className="tool-span">
        {item.label}
      </span>
      <Input field={field}
        className="tool-input"
        {...item.componentProps}
        {...field.init(`${item.field}`, { initValue: item.defaultValue })}
      />
    </div>
  );
}

const RenderSelect = (props) => {
  const { item, field } = props;
  return (
    <div className="tool-item">
      <span className="tool-span">
        {item.label}
      </span>
      <Select field={field}
        className="tool-select"
        {...item.componentProps}
        {...field.init(`${item.field}`, { initValue: item.defaultValue })}
      />
    </div>
  );
}

const RenderDatePicker = (props) => {
  const { item, field } = props;
  return (
    <div className="tool-item">
      <span className="tool-span">
        {item.label}
      </span>
      <DatePicker field={field}
        className="tool-datePicker"
        {...item.componentProps}
        {...field.init(`${item.field}`, { initValue: item.defaultValue })} />
    </div>
  );
}

const RenderTimePicker = (props) => {
  const { item, field } = props;
  return (
    <div className="tool-item">
      <span className="tool-span">
        {item.label}
      </span>
      <TimePicker field={field}
        className="tool-timePicker"
        {...item.componentProps}
        {...field.init(`${item.field}`, { initValue: item.defaultValue })} />
    </div>
  );
}

const RenderCheckbox = (props) => {
  const { item, field } = props;
  return (
    <div className="tool-item">
      <Checkbox 
        className="tool-checkBox" 
        {...item.componentProps}
        {...field.init(`${item.field}`, {valueName: 'checked', initValue: item.defaultValue || false })}
      >
        {item.label}
      </Checkbox>
    </div>
  );
}

const RenderNotSupport = (props) => {
  const { item } = props;
  return (
    <div className="tool-item">
      <span className="tool-span">
        Not support `{item.component}`
      </span>
    </div>
  );
}

@withRef
export default class CustomToolBar extends Component {
  static displayName = 'ToolBar';

  static propTypes = {
    config: PropTypes.array
  };

  static defaultProps = {
    config: []
  };

  field = new Field(this);
  getField = () => {
    return this.field;
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { config } = this.props;
    return (
      <div className="tool-bar">
        <RenderToolBar config={config} field={this.field} />
      </div>
    );
  }
}
