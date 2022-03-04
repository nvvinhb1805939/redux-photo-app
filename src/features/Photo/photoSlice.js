import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1234,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1234`,
  },
  {
    id: 1235,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1235`,
  },
  {
    id: 1236,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1236`,
  },
  {
    id: 1237,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1237`,
  },
  {
    id: 1238,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1238`,
  },
  {
    id: 1239,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1239`,
  },
  {
    id: 1240,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1240`,
  },
  {
    id: 1241,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1241`,
  },
  {
    id: 1242,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1242`,
  },
  {
    id: 1243,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1243`,
  },
  {
    id: 1244,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eligendi? Commodi reiciendis voluptatem nulla quod in molestias, culpa deserunt, repellendus animi adipisci qui sequi cupiditate dicta aspernatur facilis laudantium earum!',
    category: {
      label: 'Technology',
      value: 1,
    },
    photo: `https://picsum.photos/200/300?random=1244`,
  },
];

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto(state, action) {
      state.push(action.payload);
    },
    removePhoto(state, action) {
      const removedIndex = state.findIndex(photo => photo.id === action.payload.id);
      state.splice(removedIndex, 1);
    },
    editPhoto(state, action) {
      const editedIndex = state.findIndex(photo => photo.id === action.payload.id);
      state[editedIndex] = action.payload;
    },
  },
});

export const { addPhoto, removePhoto, editPhoto } = photoSlice.actions;
export default photoSlice.reducer;
