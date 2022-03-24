import { connect } from 'react-redux';
import { toggleFollowsAC } from '../../../Redux/WhoToFollow-reducer';
import Item from './Item';
import s from './Item.module.css'


let mapStateToProps = (state) => {
    return {

    }
}


const ItemContainer = connect(mapStateToProps, {
    toggleFollows: toggleFollowsAC
})(Item)
export default ItemContainer;