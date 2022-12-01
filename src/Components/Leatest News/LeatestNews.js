import React from "react";
import { Link } from "react-router-dom";
import "./LeatestNews.css";

export const LeatestNews = () => {
  return (
    <>
      <div className="header_news">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="news_head">
                <h3>
                  <strong>Latest News</strong>
                </h3>
              </div>
            </div>
            <div className="col-sm-12 pt-4">
              <div className="row">
                <div className="col-sm-4">
                  <div class="news_card">
                    <img
                      class="card-img-top"
                      src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-post01-1024x643.jpg"
                      alt="Card image"
                    />
                    <div class="card-body p-4">
                    <span className="date_comments text-muted"> 27 JAN, 2022 | <Link to='' className="comment_link text-muted">1 COMMENT</Link> </span>
                      <h5 class="card-title pt-3"><strong>7 New Insights You Should Know Metaverse</strong></h5>
                      <p class="news_para">"Bring to the table win-win survival strategies to ensure proactive domination. At the end of..."</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div class="news_card">
                    <img
                      class="card-img-top"
                      src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-post2-1024x643.jpg"
                      alt="Card image"
                    />
                    <div class="card-body p-4">
                    <span className="date_comments text-muted"> 24 JAN, 2022 | <Link to='' className="comment_link text-muted">3 COMMENT</Link> </span>
                      <h5 class="card-title pt-3"><strong>NFT Art Exists in the Digital World Collector</strong></h5>
                      <p class="news_para">"Bring to the table win-win survival strategies to ensure proactive domination. At the end of..."</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div class="news_card">
                    <img
                      class="card-img-top"
                      src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-post5-1024x643.jpg"
                      alt="Card image"
                    />
                    <div class="card-body p-4">
                    <span className="date_comments text-muted"> 23 JAN, 2022 | <Link to='' className="comment_link text-muted">1 COMMENT</Link> </span>
                      <h5 class="card-title pt-3"><strong>The good, the bad and the ugly about tokens</strong></h5>
                      <p class="news_para">"Bring to the table win-win survival strategies to ensure proactive domination. At the end of..."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
