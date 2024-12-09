import { useDispatch } from 'react-redux'
import Nav from 'react-bootstrap/Nav'
import Icon from '../../components/Icon'
import { useGetStoreListQuerySubscription, useGetStoreListQueryStateResult } from '../../service/api/store'
import { setResetTimer } from '../../reducers/storeMap'

const RefreshButton = () => {
  const { refetch } = useGetStoreListQuerySubscription()
  const { isLoading, isFetching } = useGetStoreListQueryStateResult()
  const dispatch = useDispatch()
  const refresh = () => {
    refetch()
    dispatch(setResetTimer(true))
  }
  return (
    <Nav.Link onClick={refresh} className="text-primary refresh-btn" disabled={isLoading || isFetching}>
      <Icon type="arrow-clockwise" className="fs-6" />
    </Nav.Link>
  )
}

export default RefreshButton
