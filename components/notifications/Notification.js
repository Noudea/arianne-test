const Notification = ({children, ...props}) => {


    return(<>
    <style jsx>{`
        
        .notificationContainer {
            background-color:red;
            position: fixed;
            width:300px;
            height:150px;
            z-index: 99999;
            pointer-events: none;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            text-align: right;
        }
        .fade-in {
            -webkit-animation-duration: .4s;
            animation-duration: .4s;
            -webkit-animation-timing-function: cubic-bezier(.99,.44,.44,1.35);
            animation-timing-function: cubic-bezier(.99,.44,.44,1.35);
        }

        .right-top {
            top:24px;
            right: 24px;
            animation-name: notificationMoveInRight;
        }

        .right-bottom {
            bottom:24px;
            right: 24px;
            animation-name: notificationMoveInRight;
        }

        .bottom-right {
            bottom:24px;
            right: 24px;
            animation-name : notificationMoveInBottom;
        }

        .bottom-left {
            bottom:24px;
            left: 24px;
            animation-name : notificationMoveInBottom;
        }
        
        @keyframes notificationMoveInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}
        @keyframes notificationMoveInBottom{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}

        `}</style>
        {props.isOpen ?
            <div className='notificationContainer fade-in bottom-left'>

            </div>
        
        : null}
    </>)
}

export default Notification