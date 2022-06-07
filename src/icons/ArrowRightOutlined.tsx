// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ArrowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowRightOutlined';

export interface ArrowRightOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ArrowRightOutlined: ArrowRightOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ArrowRightOutlinedSvg} />
    ;

ArrowRightOutlined.displayName = 'ArrowRightOutlined';

export default FunctionalComponent;