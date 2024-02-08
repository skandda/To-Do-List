const DoneItemHandler = ({item, key}) => {

    return (
    <div className='done-item'>
        <div className='done-desc'>
            <p>{item.desc}</p>
        </div>
    </div>
    )
}

export default DoneItemHandler