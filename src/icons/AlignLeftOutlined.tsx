// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AlignLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignLeftOutlined';

export interface AlignLeftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AlignLeftOutlined: AlignLeftOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AlignLeftOutlinedSvg} />
    ;

AlignLeftOutlined.displayName = 'AlignLeftOutlined';

export default FunctionalComponent;