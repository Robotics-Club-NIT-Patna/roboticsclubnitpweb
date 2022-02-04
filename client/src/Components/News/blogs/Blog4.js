import React, { useState } from "react";
import waveUp from '../../../SVGs/wave-8.svg'
import waveDown from '../../../SVGs/wave-5.svg'
import Sharex from '../ShareNews/Share'
import './blog.css'
const Blog4 = () => {

  const [showSharex, setShowSharex] = useState(false);
  const handleSharex = () => {
    setShowSharex(!showSharex);
  }
  var blogTitle = "Intro to BlockChain";
   var blogCredits = ["Name", "Branch", "RollNo"];

  return (
    <div className="blog_parent" >
      <img className="waveUp" alt="" src={waveUp} />

      <Sharex
        show={showSharex}
        title={"\n Read this amazing blog *" + blogTitle + "* on \n"}
        shortInfo={"From the year 2017, Bitcoin and blockchain were all the rage, But the two things are not synonyms and blockchain has uses far..."}
        shareUrl="https://roboticsnitp.co.in/news/second"
      />
      <span
        className={showSharex ? "toggle_sharex_btn fa fa-close" : "toggle_sharex_btn fa fa-share"}
        onClick={() => { handleSharex() }}
        title="Share this Blog" />

      <div className={showSharex ? "blog_me blurbg" : "blog_me"} style={{ transition: "0.8ms" }}>
        <h1 className="blog_title"> {blogTitle} </h1>
        <div className="blog_image">
          <img src="https://img.freepik.com/free-photo/cryptocurrency-coding-digital-black-background-open-source-blockchain-concept_53876-124641.jpg?size=626&ext=jpg" alt="blog"></img>
        </div>
        <div className="blog_content">
          <p>
            From the year 2017, Bitcoin and blockchain were all the rage, But the two things are not synonyms and blockchain has uses far beyond bitcoin and cryptocurrency.</p><p>
            To understand this let’s picture our bank statements (which keeps a track of every transaction) it’s also the CENTRAL authority taking track of everything. Here if there is a bank error in your favour ..good for u!!,and if the decimal is misplaced or your account is zeroed out.. It could be headache dealing with the bank authority to fix it.</p><p>
            Here comes the solution Distributed Ledger Technology (DLT)
            Rather than having just one authority keeping tabs on transactions ..DLT is managed by an entire network of participants .who all share the ledger of transactions .(if over half the systems on the network verify the transaction, then its approved.) Records of multiple transactions form a block which is then added on the top of previous blocks forming a chain, hence the name BLOCKCHAIN</p><p>
            Each block contains the records of the transaction, as well as a unique cryptographic hash (which Is like an alpha numeric fingerprint)plus the hash of the previous block in the chain, altering the information of the block will also generate a new hash, so tempering with the block earlier in the chain creates a mismatch that invalidates all the blocks after it.</p><p>
            While malicious hackers can quickly generate new hashes for all the blocks in the chain ,trying to cover their tracks, the decentralized nature of the DLT makes their job difficult(Remember over half the systems keeping tabs of the transactions have to agree with any changes, so hackers will have to take control of over 51% of the entire network to achieve their goal PLUS some blocks can artificially increase the time it takes to create new hashes, making the process of hacking multiple blocks impractical)</p><p>
            For example: BITCOINS “proof-of-work” mechanism ,means new blocks are added to the chain, in 10 minutes interval .Basically ,blockchain can be a way to get multiple parties that may not trust each other to share and agree on data .Its this Peer-to-peer system that’s made blockchain appealing for financial applications like Bitcoin and other cryptocurrencies. But Ironically, the same feature that make is secure also make it impractical for many applications. Making every node in the network keep track of every transactions ,plus intentionally slowing down the generation of hashes ,means transactions can take an inconvenient amount of time. While a credit card company can handle well order a 1000 transactions/sec, bitcoin can’t handle more than seven. Cryptocurrencies are trying to find away to speed up these transactions without compromising security ,which is a major hurdle. Still, there are other applications where blockchain can come in handy, like tracking shipments.</p><p>
            Some ports and shipping companies are testing out DLT so everyone can securely track and monitor containers. After a batch of lettuce was contaminated with E.coli, Walmart made produce providers use a distributed ledger so that they could automatically track exactly where all its produce came from and where it went. There are potential uses for the blockchain in healthcare, like managing data in medical trials while maintaining anonymity. But the enthusiasm for blockchain has dimmed since the word entered the public lexicon a few years ago. As is typical with any emerging technology, laws have lagged behind its development, making it hard to legally use blockchain applications, especially across jurisdictions like is required for international finance .In some cases ,there’s already other softwares that can do most of what blockchain does, just without the security of a decentralized network. So if security isn’t a huge concern, then there’s no need to adopt it.</p><p>
            And smaller network might not be that secure anyway, since its easier for bad actors to take control over 51 percent of the nodes. All this means that is a really cool and clever idea that hasn’t found its niche yet. Give It a few years for the systems to advance and for the laws to mature ..and we re ..and we re ..and we may one day rely on blockchains without even realising it.
          </p>
        </div>
        
        <div className="blog_credits">
            This article was contributed by <b>{blogCredits[0]}</b> (<b>{blogCredits[1]}</b>), Roll Number : <b>{blogCredits[2]}</b>
          </div>     
      </div>
      <img className="waveDown" src={waveDown} alt="not found"/>
    </div>
  )
}

export default Blog4;