// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RollbackOutlinedSvg from '@ant-design/icons-svg/lib/asn/RollbackOutlined';

export interface RollbackOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RollbackOutlined: RollbackOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RollbackOutlinedSvg} />
    ;

RollbackOutlined.displayName = 'RollbackOutlined';

export default FunctionalComponent;