// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DashOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashOutlined';

export interface DashOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DashOutlined: DashOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DashOutlinedSvg} />
    ;

DashOutlined.displayName = 'DashOutlined';

export default FunctionalComponent;