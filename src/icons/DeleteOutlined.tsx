// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteOutlined';

export interface DeleteOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DeleteOutlined: DeleteOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DeleteOutlinedSvg} />
    ;

DeleteOutlined.displayName = 'DeleteOutlined';

export default FunctionalComponent;