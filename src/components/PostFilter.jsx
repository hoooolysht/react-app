import React from 'react'
import MySelect from '../components/UI/select/MySelect'
import MyInput from '../components/UI/input/MyInput'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="search"
          />
        <MySelect 
          vlaue={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="sort by"
          options={[
            {value: "title", name: 'Title'},
            {value: "body", name: 'Body'},
          ]}
        />
      </div>
    )
}

export default PostFilter