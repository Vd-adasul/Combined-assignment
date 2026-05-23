// Problem Description – Deduplicated Network Request Utility

// You are required to build a utility that prevents multiple identical network requests from executing simultaneously. 
// If the same request (for example, getData('id-1')) is called multiple times at the same moment, only one network request should be triggered. 
// All callers must receive the same Promise result once the request completes.

const pendingRequests = new Map();

async function deduplicatedFetch(id, apiCall) {
    if(pendingRequests[apiCall]){
        pendingRequests[apiCall].push(id); 
    }else{
        pendingRequests[apiCall] = [id]
        try{
            result = await(apiCall);
            return the result to the users
        }catch(err){
            throw err;
        }
        }
        
    }

    

}

module.exports = deduplicatedFetch;

// 1. many people(say id 1, 2,3,4 ) call an apiCall 
// 2. hence pending request should have apiCall --> [array of user who called that, in this case 1,2,3,4];
// 3. if that api call doesnt exist then we have do add in the pending requests[apiCall] and the id that called it
// 3. we have to result =  await apiCall 
// 4. after it awaits we have to return the users the api call  
// 5. 