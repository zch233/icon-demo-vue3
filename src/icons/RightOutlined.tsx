// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';

export interface RightOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RightOutlined: RightOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RightOutlinedSvg} />
    ;

RightOutlined.displayName = 'RightOutlined';

export default FunctionalComponent;