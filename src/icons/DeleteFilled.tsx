// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import DeleteFilledSvg from '@ant-design/icons-svg/lib/asn/DeleteFilled';

export interface DeleteFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DeleteFilled: DeleteFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={DeleteFilledSvg} />
    ;

DeleteFilled.displayName = 'DeleteFilled';

export default DeleteFilled;