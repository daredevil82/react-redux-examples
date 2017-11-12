import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreators as UndoActionCreators} from 'redux-undo';
import {connect} from 'react-redux';

let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>Undo</button>
        <button onClick={onRedo} disabled={!canRedo}>Redo</button>
    </p>
);

const mapStateToProps = state => ({
    canRedo: state.todos.future.length > 0,
    canUndo: state.todos.past.length > 0
});

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
});

UndoRedo.propTypes = {
    canRedo: PropTypes.bool.isRequired,
    onRedo: PropTypes.func.isRequired,
    canUndo: PropTypes.bool.isRequired,
    onUndo: PropTypes.func.isRequired,
};

UndoRedo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo);

export default UndoRedo;