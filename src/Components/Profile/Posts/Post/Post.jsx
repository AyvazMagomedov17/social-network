import s from '../../../../Styles/Profile/post.module.scss'
import classNames from 'classnames'
import likeImg from '../../../../Assets/img/Profile/like.svg'
import dislikeImg from '../../../../Assets/img/Profile/dislike.svg'
import { useState } from 'react'


const Post = (props) => {
    const [likesCount, setlikesCount] = useState(0)
    const [dislikesCount, setdislikesCount] = useState(0)
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
                        <button onClick={() => setlikesCount(likesCount + 1)} className={classNames(s.like, s.likes)}>
                            <img src={likeImg} alt="likes" />
                            <span>{likesCount}</span>
                        </button>
                        <button onClick={() => setdislikesCount(dislikesCount + 1)} className={classNames(s.dislike, s.likes)} >
                            <img src={dislikeImg} alt="dislikes" />
                            <span>{dislikesCount}</span>
                        </button>
                    </div>
                </div>
                <p className={s.text}>{props.text}</p>
            </div>
        </div >



    )
}

export default Post;