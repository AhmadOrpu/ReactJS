export default function taskReducer(draft, action) { 

//     if (action.type === 'added') {
//         return [
//             ...draft,
//             {
//                 id: action.id,
//                 text: action.text,
//                 isDone: false,
//             },
//         ];
            
//         } else if(action.type === 'deleted'){
//         return draft.filter((t) => t.id !== action.taskId)
            
//         } else if(action.type === 'changed'){
//         return draft.map((t) => {
//             if (t.id === action.task.id) {
//               return {
//                 ...t,
//                 text: action.task.text,
//                 isDone: action.task.isDone,
//               };
//             } else {
//               return t;
//             }
//           });
//     } else {
//         throw new Error('No action matched');
//     }
// }


switch (action.type) {
    
    case 'added':
        draft.push({
            
                id: action.id,
                text: action.text,
                isDone: false,
            
        })
        break;
    
        case 'changed': {
            const index = draft.findIndex((t) => t.id === action.task.id);
            draft[index].text = action.task.text;
            draft[index].isDone = action.task.isDone;
        }
            break;
    
    case 'deleted':
        return draft.filter((t) => t.id !== action.taskId);
    
    
    default:
        throw new Error('No action matched');
}

}
