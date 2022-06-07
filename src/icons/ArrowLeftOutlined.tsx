// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ArrowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftOutlined';

export interface ArrowLeftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ArrowLeftOutlined: ArrowLeftOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ArrowLeftOutlinedSvg} />
    ;

ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';

export default FunctionalComponent;