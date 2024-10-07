/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    //common node will appear within first 2 edges
    if(edges[0][0] == edges[1][0] || edges[0][0] == edges [1][1]){
        return edges[0][0];
    }else{
        return edges[0][1];
    }
};