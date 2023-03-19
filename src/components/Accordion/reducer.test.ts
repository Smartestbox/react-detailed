import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', ()=> {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    // expectation
    expect(newState.collapsed).toBe(false)
})