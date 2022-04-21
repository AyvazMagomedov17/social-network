

import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { findUsersThunk } from '../../../../Redux/Friends-reducer'
import { getCurrentPageSelector, getPageSizeSelector } from '../../../../Redux/Selectors/FrienList-selector'
//@ts-ignore
import s from '../../../../Styles/Friends/friendListFindForm.module.scss'
import { GetFuncForUseSelector } from '../../../common/Functions/Functions'

type PropsType = {
    setisClick: React.Dispatch<React.SetStateAction<boolean>>
    setTermForFindUsers: React.Dispatch<React.SetStateAction<string>>
    isFindUsers: boolean
    setIsFindUsers: React.Dispatch<React.SetStateAction<boolean>>
}

const FriendListFindForm = ({ setisClick, setTermForFindUsers, isFindUsers, setIsFindUsers }: PropsType) => {
    const dispatch = useDispatch()
    let StateProps = {
        pageSize: GetFuncForUseSelector(getPageSizeSelector) as number,
        currentPage: GetFuncForUseSelector(getCurrentPageSelector) as number,

    }
    return (
        <Formik initialValues={
            {
                term: '' as string

            }
        }
            onSubmit={(values) => {

                dispatch(findUsersThunk(StateProps.currentPage, StateProps.pageSize, values.term))
                setTermForFindUsers(values.term)
                setisClick(true)
            }}
        >
            {({ handleSubmit, handleChange, values }) => (
                <div className={s.findForm}>
                    <input type="text" onChange={handleChange} name={'term'} value={values.term} />
                    <button className={s.editButton} type={'submit'} onClick={() => {
                        setIsFindUsers(true)
                        handleSubmit()


                    }}>Find</button>
                </div>
            )}
        </Formik>
    )
}

export default FriendListFindForm

