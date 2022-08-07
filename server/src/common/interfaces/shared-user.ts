import { ShareMode } from '../../common/enums';

export default interface SharedUser {
  user_id: number;
  mode: ShareMode;
  created_at: number;
}
