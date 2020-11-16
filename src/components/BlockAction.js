function BlockAction({ isLoadingOpen }) {
    return (

        <div className="block-action block-action_active">
            {isLoadingOpen && <div className='spinner'></div >}
        </div>
    );
}

export default BlockAction;