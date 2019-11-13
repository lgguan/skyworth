---
title: CustomToolBar
order: 1
---

本 Demo 演示自定工具条的用法。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CustomToolBar, ExampleComponent } from '@skyworthcloud/component';

class App extends Component {
  _searchField = null;
  config = [
  {
    label: '姓名',
    key: 'name',
    component: 'Input',
    field: 'name',
    componentProps: {
      trim: true,
      placeholder: '请输入姓名'
    }
  },
  {
    label: '性别',
    key: 'sex',
    component: 'Select',
    field: 'sex',
    defaultValue: 0,
    componentProps: {
      dataSource: [
        {
          label: 'All',
          value: 0,
        },
        {
          label: '男性',
          value: 1,
        },
        {
          label: '女性',
          value: 2,
        },
      ]
    }
  },
  {
    label: '开始日期',
    key: 'startTime',
    component: 'DatePicker',
    field: 'startTime',
    defaultValue: '2019-08-10 01:30:00',
    componentProps: {
      placeholder: 'Please select date',
      resetTime: true,
    }
  },
  {
    label: '时间',
    key: 'time',
    component: 'TimePicker',
    field: 'time',
    defaultValue: '01:30',
    componentProps: {
      placeholder: 'Please select time',
      format: 'HH:mm',
    }
  },
  {
    label: '复选',
    key: 'checkBox',
    component: 'CheckBox',
    field: 'checkBox',
    componentProps: {
    }
  },
  {
    label: '单选',
    key: 'radio',
    component: 'Radio',
    field: 'radio',
    componentProps: {
    }
  },
  {
    label: 'Search',
    key: 'search',
    component: 'Button',
    componentProps: {
      disabled: false,
      onClick: () => this.onSearch()
    }
  },
  {
    label: 'New',
    key: 'new',
    component: 'Button',
    componentProps: {
      disabled: true,
    }
  },
];

 onSearch = () => {
  console.log('search params: ', this._searchField.getValues())
}

  render() {
    return (
      <div>
        <CustomToolBar config = {this.config}
          getInstance={(childCp) => {
            if (childCp) {
              this._searchField = childCp.getField()
            }
          }} 
        />
        <ExampleComponent />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
