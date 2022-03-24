import s from './Post.module.css'
import classNames from 'classnames'
import likeImg from '../../../../Assets/img/Profile/like.svg'
import dislikeImg from '../../../../Assets/img/Profile/dislike.svg'


const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.body}>
                <div className={s.row}>
                    <div className={s.left}>
                        <div className={s.img}>
                            <img src={props.img} alt="person" />
                        </div>
                        <span className={s.name}>{props.name}</span>
                        <div className={s.following}>
                            {props.follow}
                        </div>
                    </div>
                    <div className={s.right}>
                        <button className={classNames(s.like, s.likes)}>
                            <img src={likeImg} alt="likes" />
                            <span>{props.like}</span>
                        </button>
                        <button className={classNames(s.dislike, s.likes)} >
                            <img src={dislikeImg} alt="dislikes" />
                            <span>{props.dislike}</span>
                        </button>
                    </div>
                </div>
                <p className={s.text}>{props.text}</p>
            </div>
        </div >



    )
}

export default Post;