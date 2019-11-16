import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_VIEW_AS } from '../../../store/actions';
import s from './view.module.css';

const View = ({ currentView, changeView }) => (
  <div className={s.container}>
    <ul className={s.list}>
      <li
        className={`${s.listItem} ${currentView === 'icon' ? s.active : ''}`}
        onClick={() => changeView('icon')}
      >
        <i className='icono-tiles'></i>
      </li>
      <li
        className={`${s.listItem} ${currentView === 'list' ? s.active : ''}`}
        onClick={() => changeView('list')}
      >
        <i className='icono-list'></i>
      </li>
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    currentView: state.viewAs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeView: viewType =>
      dispatch({
        type: CHANGE_VIEW_AS,
        payload: { viewAs: viewType }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
