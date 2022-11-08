import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Screen = (props) => {
    var markdown = props.markupData
    return (
        <div className='screen' >
          
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
        </div>
    )
};
export default Screen;