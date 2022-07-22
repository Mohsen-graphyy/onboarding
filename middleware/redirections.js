export default function ({store, redirect}) {
    if (!store.state.mainpage.isClicked) {
        return redirect('/')
    }
}