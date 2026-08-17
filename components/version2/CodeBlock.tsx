"use client";

import { use3DTilt } from "./hooks";

export default function CodeBlock() {
  const { ref, tiltStyle, onMouseMove, onMouseLeave } = use3DTilt(8);

  return (
    <div
      ref={ref}
      className="code-block"
      style={tiltStyle}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="code-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="code-filename">profile.ts</span>
      </div>
      <div className="code-body">
        <pre>
          <code>
            <span className="c-key">const</span>{" "}
            <span className="c-str">engineer</span>{" "}
            <span className="c-pun">=</span> &#123;{"\n"}
            {"  "}
            <span className="c-key">name</span>
            <span className="c-pun">:</span>{" "}
            <span className="c-str">&quot;Mohammad Saquib&quot;</span>
            <span className="c-pun">,</span>
            {"\n"}
            {"  "}
            <span className="c-key">title</span>
            <span className="c-pun">:</span>{" "}
            <span className="c-str">&quot;Senior Software Developer&quot;</span>
            <span className="c-pun">,</span>
            {"\n"}
            {"  "}
            <span className="c-key">focus</span>
            <span className="c-pun">:</span> [{"\n"}
            {"    "}
            <span className="c-str">&quot;Distributed Systems&quot;</span>
            <span className="c-pun">,</span>
            {"\n"}
            {"    "}
            <span className="c-str">&quot;Serverless Architecture&quot;</span>
            <span className="c-pun">,</span>
            {"\n"}
            {"    "}
            <span className="c-str">&quot;AI Agent Integration&quot;</span>
            <span className="c-pun">,</span>
            {"\n"}
            {"    "}
            <span className="c-str">&quot;API &amp; Integrations&quot;</span>
            {"\n"}
            {"  "}]<span className="c-pun">,</span>
            {"\n"}
            {"  "}
            <span className="c-key">stack</span>
            <span className="c-pun">:</span> &#123;{"\n"}
            {"    "}
            <span className="c-key">frontend</span>
            <span className="c-pun">:</span> [
            <span className="c-str">&quot;React&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;TypeScript&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;Redux&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;Zustand&quot;</span>]
            <span className="c-pun">,</span>
            {"\n"}
            {"    "}
            <span className="c-key">backend</span>
            <span className="c-pun">:</span> [
            <span className="c-str">&quot;Node.js&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;Express&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;gRPC&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;FastAPI&quot;</span>]
            <span className="c-pun">,</span>
            {"\n"}
            {"    "}
            <span className="c-key">cloud</span>
            <span className="c-pun">:</span> [
            <span className="c-str">&quot;Google Cloud&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;AWS&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;Docker&quot;</span>]
            <span className="c-pun">,</span>
            {"\n"}
            {"    "}
            <span className="c-key">database</span>
            <span className="c-pun">:</span> [
            <span className="c-str">&quot;MongoDB&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;Firestore&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;SQL&quot;</span>
            <span className="c-pun">,</span>{" "}
            <span className="c-str">&quot;Redis&quot;</span>]
            <span className="c-pun">,</span>
            {"\n"}
            {"  "}&#125;<span className="c-pun">,</span>
            {"\n"}
            {"  "}
            <span className="c-key">experience</span>
            <span className="c-pun">:</span>{" "}
            <span className="c-str">&quot;4.8+ years&quot;</span>
            <span className="c-pun">,</span>
            {"\n"}
            {"  "}
            <span className="c-key">openToWork</span>
            <span className="c-pun">:</span>{" "}
            <span className="c-bool">true</span>
            <span className="c-pun">,</span>
            {"\n"}
            &#125;
          </code>
        </pre>
      </div>
    </div>
  );
}
