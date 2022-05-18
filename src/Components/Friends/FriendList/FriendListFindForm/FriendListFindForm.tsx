

import { Field, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { FilterType, filterUsersThunk, friendsAction } from '../../../../Redux/Friends-reducer'
import { getCurrentPageSelector, getFilterSelector, getPageSizeSelector } from '../../../../Redux/Selectors/FrienList-selector'
//@ts-ignore
import s from '../../../../Styles/Friends/friendListFindForm.module.scss'
import { GetFuncForUseSelector } from '../../../common/Functions/Functions'

type PropsType = {
    setPortionNumber: React.Dispatch<React.SetStateAction<number>>
    setTermForFindUsers: React.Dispatch<React.SetStateAction<string>>


}

const FriendListFindForm = ({ setTermForFindUsers, setPortionNumber }: PropsType) => {
    const dispatch = useDispatch()

    let filter: FilterType = useSelector(getFilterSelector)

    let StateProps = {
        pageSize: GetFuncForUseSelector(getPageSizeSelector) as number,
        currentPage: GetFuncForUseSelector(getCurrentPageSelector) as number,

    }

    return (
        <Formik enableReinitialize={true} initialValues={

            {
                term: filter.term as string,
                friend: filter.friend as null | string
            }
        }
            onSubmit={async (values) => {

                dispatch(friendsAction.setCurrentPageAC(1))
                dispatch(friendsAction.setFilterAC({ friend: values.friend, term: values.term }))
                dispatch(filterUsersThunk(1, StateProps.pageSize, values.term, values.friend))
                setTermForFindUsers(values.term)
                setPortionNumber(1)

            }}
        >
            {({ handleSubmit, handleChange, values }) => (
                <div className={s.findForm}>
                    <Field className={s.findSelect} as="select" name="friend">
                        <option value="null">All users</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <input onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            handleSubmit()
                        }
                    }} type="text" onChange={handleChange} className={s.findInput} name={'term'} value={values.term} />
                    <button className={s.findButton} type={'submit'} onClick={() => {
                        handleSubmit()
                    }}>Find</button>
                </div>
            )}
        </Formik >
    )
}

export default FriendListFindForm

