import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerItem } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { Header } from './Header.jsx';
const CustomItem = props => {
  const {
    visible,
    ...others
  } = props;
  const arrowDir = props['data-expanded'] ? 'k-i-arrow-chevron-down' : 'k-i-arrow-chevron-right';
  return <React.Fragment>
        {props.visible === false ? null : <DrawerItem {...others}>
          <span className={'k-icon ' + props.icon} />
          <span className={'k-item-text'}>{props.text}</span>
          {props['data-expanded'] !== undefined && <span className={"k-icon " + arrowDir} style={{
        position: "absolute",
        right: 10
      }} />}
        </DrawerItem>}
      </React.Fragment>;
};

const DrawerContainer = props => {
  const [drawerExpanded, setDrawerExpanded] = React.useState(true);
  const [items, setItems] = React.useState(
      [
    {
    text: 'Dashbord',
    icon: 'k-i-grid',
    id: 1,
    selected: true,
    route: '/'
  }, {
    text: 'HR',
    icon: 'k-i-heart',
    id: 2,
    ['data-expanded']: false
  },
  {
    text: 'Master',
    icon: 'k-i-heart',
    id: 3,
    parentId: 2,
    ['data-expanded']: false
  }
  , {
    text: 'Department Master',
    icon: 'k-i-minus',
    id: 4,
    parentId: 3,
    route: '/departmentlist'
  },
  {
    text: 'Designation Master',
    icon: 'k-i-minus',
    id: 5,
    parentId: 3,
    route: '/designationlistmaster'
  },
  {
    text: 'Controctor Master',
    icon: 'k-i-minus',
    id: 6,
    parentId: 3,
    route: '/contractorlist'
  },
  {
    text: 'Employee Master',
    icon: 'k-i-minus',
    id: 7,
    parentId: 3,
    route: '/employeelist'
  },
  {
    text: 'Holydays Master',
    icon: 'k-i-minus',
    id: 8,
    parentId: 3,
    route: '/holydaymaster'
  },
  {
    text: 'Transactions',
    icon: 'k-i-heart',
    id: 9,
    parentId: 2,
    ['data-expanded']: false
  },
  {
    text: 'Manual Attendance',
    icon: 'k-i-pencil',
    id: 10,
    parentId: 9,
    route: '/manualattedance'
  },
  {
    text: 'Biometric IN/OUT Changes',
    icon: 'k-i-pencil',
    id: 11,
    parentId: 9,
    route: '/biometricmodifications'
  },{
    text: 'OnDuty',
    icon: 'k-i-pencil',
    id: 12,
    parentId: 9,
    route: '/onduty'
  },
  {
    text: 'Leave Request',
    icon: 'k-i-pencil',
    id: 13,
    parentId: 9,
    route: '/leaverequest'
  },
  {
    text: 'Reports',
    icon: 'k-i-calendar',
    id: 14,
    parentId: 2,
    ['data-expanded']: false
  },
  {
    text: 'Employee Report',
    icon: 'k-i-calendar',
    id: 15,
    parentId: 14,
    route: '/'
  },
  {
    text: 'Local Workers Report',
    icon: 'k-i-calendar',
    id: 16,
    parentId: 14,
    route: '/'
  },
  {
    text: 'Daily Attendance Report',
    icon: 'k-i-calendar',
    id: 17,
    parentId: 14,
    route: '/'
  },
  {
    text: 'Monthly IN/OUT Report',
    icon: 'k-i-pencil',
    id: 18,
    parentId: 14,
    route: '/'
  },
   {
    separator: true
  },
   {
    text: 'General Store',
    icon: 'k-i-heart',
    id: 19,
    ['data-expanded']: false
  }, 
  {
    text: 'Master',
    icon: 'k-i-heart',
    id: 20,
    parentId: 19,
    ['data-expanded']: false
  },
  {
    text: 'Supplier',
    icon: 'k-i-minus',
    id: 21,
    parentId: 20,
    route: '/supplier'
  }, {
    text: 'Store Items',
    icon: 'k-i-minus',
    id: 22,
    parentId: 20,
    route: '/items'
  },
  {
    text: 'Transaction',
    icon: 'k-i-heart',
    id: 23,
    parentId: 19,
    ['data-expanded']: false
  },
  {
    text: 'Issue Indent',
    icon: 'k-i-minus',
    id: 24,
    parentId: 23,
    route: '/issueindent'
  },
  {
    text: 'PO Indent',
    icon: 'k-i-minus',
    id: 25,
    parentId: 23,
    route: '/poindent'
  },
  {
    text: 'Reports',
    icon: 'k-i-calendar',
    id: 26,
    parentId: 19,
    ['data-expanded']: false
  },
  {
    text: 'Item Details',
    icon: 'k-i-minus',
    id: 27,
    parentId: 26,
    route: '/itemdetails'
  }, {
    text: 'item Stock',
    icon: 'k-i-minus',
    id: 28                                                                          ,
    parentId: 26,
    route: '/stockreport'
  },
  {
   text: 'PURCHASE',
   icon: 'k-i-heart',
   id: 29,
   ['data-expanded']: false
 }, {
  text: 'Master',
  icon: 'k-i-heart',
  id: 30,
  parentId: 29,
  ['data-expanded']: false
},
{
  text: 'Farmer/Agent',
  icon: 'k-i-minus',
  id: 31,
  parentId: 30,
  route: '/farmeragent'
}, {
  text: 'Count Price',
  icon: 'k-i-minus',
  id: 32,
  parentId: 30,
  route: '/items'
},
{
  text: 'Transaction',
  icon: 'k-i-heart',
  id: 33,
  parentId: 29,
  ['data-expanded']: false
},
{
  text: 'Purchase Enquery',
  icon: 'k-i-minus',
  id: 34,
  parentId: 33,
  route: '/purchaseenquery'
},
{
  text: 'Vehicle Schedule',
  icon: 'k-i-minus',
  id: 35,
  parentId: 33,
  route: '/vehicleschedule'
},
{
  text: 'Reports',
  icon: 'k-i-calendar',
  id: 36,
  parentId: 29,
  ['data-expanded']: false
},
{
  text: 'Enquery Report',
  icon: 'k-i-minus',
  id: 37,
  parentId: 36,
  route: '/enqueryrepory'
}, {
  text: 'Schedule Report',
  icon: 'k-i-minus',
  id: 28                                                                          ,
  parentId: 26,
  route: '/schulereport'
}
]);

  const handleClick = () => {
    setDrawerExpanded(!drawerExpanded);
  };

  const onSelect = ev => {
    const currentItem = ev.itemTarget.props;
    const isParent = currentItem['data-expanded'] !== undefined;
    const nextExpanded = !currentItem['data-expanded'];
    const newData = items.map(item => {
      const {
        selected,
        ['data-expanded']: currentExpanded,
        id,
        ...others
      } = item;
      const isCurrentItem = currentItem.id === id;
      return {
        selected: isCurrentItem,
        ['data-expanded']: isCurrentItem && isParent ? nextExpanded : currentExpanded,
        id,
        ...others
      };
    });
    props.history.push(ev.itemTarget.props.route);
    setItems(newData);
  };

  const data = items.map(item => {
    const {
      parentId,
      ...others
    } = item;

    if (parentId !== undefined) {
      const parent = items.find(parent => parent.id === parentId);
      return { ...others,
        visible: parent['data-expanded']
      };
    }

    return item;
  });
  return <div>
      {/* <div className="custom-toolbar">
        <Button icon="menu" look="flat" onClick={handleClick} />
        <span className="title">Categories</span>
      </div> */}
      <Header
                    onButtonClick={handleClick}
                />
      <Drawer expanded={drawerExpanded} mode='push' width={280} items={data} item={CustomItem} onSelect={onSelect}
                    mini={false}>
        <DrawerContent>
          {props.children}
        </DrawerContent>
      </Drawer>
    </div>;
};

export default withRouter(DrawerContainer);