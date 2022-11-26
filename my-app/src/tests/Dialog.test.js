
import { render } from "@testing-library/react";
import FormDialog from "../components/Dialog";

describe('Test dialog window', ()=>{
    it('snapsot test', ()=>{
        const component = render(<FormDialog open={true} message={'Hello'}/>);
        expect(component).toMatchSnapshot();
    })
})