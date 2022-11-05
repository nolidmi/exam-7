import React from 'react';
interface PropsOrder {
  // item: IngredientType;
  // count: number;
  // onHandlerClick: React.MouseEventHandler;
}

const Items:React.FC<PropsOrder> = (props) => {
  return (
    <div className="">
      <div className="card d-block">
        <img src="" className=" card-img-top" alt="item-img"/>
          <div className="card-body">
            <h5 className="card-title">Вафли</h5>
            <p className="card-text">120</p>
            <a href="#" className="btn btn-primary">заказать</a>
          </div>
      </div>
    </div>
  );
};

export default Items;