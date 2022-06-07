// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import GlobalOutlinedSvg from '@ant-design/icons-svg/lib/asn/GlobalOutlined';

export interface GlobalOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GlobalOutlined: GlobalOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={GlobalOutlinedSvg} />
    ;

GlobalOutlined.displayName = 'GlobalOutlined';

export default FunctionalComponent;