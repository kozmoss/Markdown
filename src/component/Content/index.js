import { useSelector,useDispatch } from "react-redux";
import { setMarkdownText } from "../../redux/markdownSlice";
import  ReactMarkdown  from "react-markdown";
import remarkGfm from 'https://cdn.skypack.dev/remark-gfm@3?dts'
function Content() {
    const { markdownText,textHelp,isShowingHelp} = useSelector((state) => state.markdown)
    const dispatch = useDispatch();
  return (
    <div className="mt-[2rem] ">
    <div className="flex flex-wrap items-center justify-center">
      {/* Panel Left */}
      <textarea
        name="dropdownText"
        id=""
        cols="30"
        rows="10"
        className="w-2/5 max-w-[750px] h-[750px] shadow-[10px_10px_#646464] bg-boxYellow m-5 p-3 focus:outline-none font-spaceMono"
        value={isShowingHelp ? textHelp : markdownText}
        onChange={(e) => dispatch(setMarkdownText(e.target.value))}
      />

      {/* Panel Right */}
      <div className="w-2/5 max-w-[700px] h-[750px] bg-boxYellow m-5 shadow-[10px_10px_#646464] p-3 scroll-smooth">
        {/* <div dangerouslySetInnerHTML={processedText}></div> */}
        <ReactMarkdown
          children={`${isShowingHelp ? textHelp : markdownText}`}
          remarkPlugins={[remarkGfm]}
          className="prose h-full snap-y font-spaceMono scrollbar"
        />
      </div>
    </div>
  </div>
  )
}
export default Content