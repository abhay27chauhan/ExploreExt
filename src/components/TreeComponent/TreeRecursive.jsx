import React from 'react';
import Folder from './Folder';

const TreeRecursive = ({active, setActive, data, path, setBreadCrumb }) => {
  // loop through the data

  let arr = data.map((item) => {
    if (item.type === "folder") {
      if (item.childrens) {
        return (
          <Folder
            setActive={setActive}
            active={active}
            name={item.name}
            path={`${path}/${item.name}`}
            setBreadCrumb={setBreadCrumb}
          >
            {/* Call the <TreeRecursive /> component with the current item.childrens */}
            <TreeRecursive
              setActive={setActive}
              active={active}
              data={item.childrens}
              path={`${path}/${item.name}`}
              setBreadCrumb={setBreadCrumb}
            />
          </Folder>
        );
      } else {
        return (
          <Folder
            setActive={setActive}
            active={active}
            name={item.name}
            path={`${path}/${item.name}`}
            setBreadCrumb={setBreadCrumb}
          ></Folder>
        );
      }
    }
  });

  arr = arr.filter((val) => val != undefined);
  return arr;
};

export default TreeRecursive;
