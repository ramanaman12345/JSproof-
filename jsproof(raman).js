
// variable to hold nft
const container = []
// function to mint NFT
// it takes some parameters as input (id,name,length,creatorID,videoHash)
function mintNFT(id,course,length,creatorID,videoHash){

    // creatting an object to store the details of the NFT
    video = {
        id:id,
        course:course,
        length:length,
        creatorID:creatorID,
        videoHash:videoHash
    }

    // adding the NFT to container
    container.push(video)
}

// function to print a single Video NFT
function printVideoNFT(videoNFT){
    console.log("ID: "+videoNFT.id)
    console.log("course: "+videoNFT.course)
    console.log("Length: "+videoNFT.length)
    console.log("CreatorID: "+videoNFT.creatorID)
    console.log("Video Hash: "+videoNFT.videoHash)
    console.log("\n")
}

// function to print the NFT collection stored in list
function listNFTs(){
    for(let i=0;i<container.length;i++){
        console.log((i+1)+".")
        printVideoNFT(container[i])
    }
}

// function to print and return the number of NFTs stored in the list
function getTotalSupply(){
    console.log("Total NFTs: "+container.length)
    return container.length
}

// calling mintNFT function with few random data
mintNFT(1000,"JS Proof Tutorial",10,4501,"jehf48t74hfuij")
mintNFT(1001,"ETH Proof Tutorial",16,9582,"mnvfhf4be34hfuij")
mintNFT(1002,"AI Proof Tutorial",21,5423,"sahf48t74hfuij")
mintNFT(1003,"AVAX Proof Tutorial",6,9581,"pouf48ttehfuij")
mintNFT(1004,"Poly Proof Tutorial",9,9089,"nbdrr48t74hfuij")

// calling listNFTs function to print the NFT collection
listNFTs()
console.log()

// calling getTotalSupply function to print the number of NFTs available in the list
getTotalSupply()
