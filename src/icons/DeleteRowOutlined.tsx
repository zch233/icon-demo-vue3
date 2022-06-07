// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DeleteRowOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteRowOutlined';

export interface DeleteRowOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DeleteRowOutlined: DeleteRowOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DeleteRowOutlinedSvg} />
    ;

DeleteRowOutlined.displayName = 'DeleteRowOutlined';

export default FunctionalComponent;