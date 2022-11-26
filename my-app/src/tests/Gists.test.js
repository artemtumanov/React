
// import { render } from "@testing-library/react";
// import configureStore from "redux-mock-store";
// import { Provider } from 'react-redux';
// import Gists from "../pages/Gists";

// const middlewares = [];
// const mockStore = configureStore(middlewares);

// describe('Test dialog window', () => {
//     // it('snapsot test', ()=>{
//     //     const component = render(<Gists/>);
//     //     expect(component).toMatchSnapshot();
//     // })
//     it('dispatches gists', () => {
//         render(
//             <Provider store={mockStore}>
//                 <Gists />
//             </Provider>
//         );
//         const actions = mockStore.getActions();
//         const lastAction = actions[actions.length - 1];
//         expect(lastAction).toEqual();
//     });
// })