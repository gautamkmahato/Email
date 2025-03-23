
import EditorHeader from './_components/EditorHeader'
import EditorSidebar from './_components/EditorSidebar'
import Canvas from './_components/Canvas'
import Settings from './_components/SettingSidebar'


export default function Editor() {

    return (
        <>
            <EditorHeader />
            <div className='mt-4 bg-gray-100 grid grid-cols-5'>
                <EditorSidebar />
                <div className='col-span-3'>
                    <Canvas />
                </div>
                <Settings />
            </div>
        </>
    )
}
