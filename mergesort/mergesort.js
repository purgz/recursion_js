let list1 = [0, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13];
let list2 = [1, 3, 5, 7, 8, 9, 10, 12, 14, 15, 16, 17];

let list3 = [3, 5, 62, 3, 7, 8, 3, 1, 6, 9, 5, 3];

function merge(list1, list2) {
  let l1 = 0;
  let l2 = 0;
  let i = 0;
  let merged = [];

  while (l1 < list1.length && l2 < list2.length) {
    if (list1[l1] <= list2[l2]) {
      merged[i] = list1[l1++];
    } else {
      merged[i] = list2[l2++];
    }
    i++;
  }

  while (l1 < list1.length) {
    merged[i++] = list1[l1++];
  }

  while (l2 < list2.length) {
    merged[i++] = list2[l2++];
  }

  return merged;
}

function mergesort(list) {
  let mid = list.length / 2;

  if (list.length < 2) {
    return list;
  }

  let left = list.splice(0, mid);
  return merge(mergesort(left), mergesort(list));
}
console.log(list3);
console.log(mergesort(list3));
