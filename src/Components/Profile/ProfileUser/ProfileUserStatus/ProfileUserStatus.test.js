import { create } from "react-test-renderer";
import ProfileUserStatus from "./ProfileUserStatus";


describe("ProfileUserComponent", () => {
    test("Input value should be 'myStatus' ", () => {
        let myStatus = 'myStatus'
        const component = create(<ProfileUserStatus status={myStatus} editModeP={true} />);
        const instanse = component.root
        const input = instanse.findByType('input')
        expect(input.props.value).toBe(myStatus)
    });
    test("Input  should be find ", () => {
        const component = create(<ProfileUserStatus editModeP={true} />);
        const instanse = component.root
        const input = instanse.findByType('input')
        expect(input).not.toBeNull()
    });
    test("Div should be find ", () => {
        const component = create(<ProfileUserStatus />);
        const instanse = component.root
        const div = instanse.findByType('div')
        expect(div).not.toBeNull()
    });

});