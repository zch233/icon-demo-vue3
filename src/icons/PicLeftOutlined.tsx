// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PicLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicLeftOutlined';

export interface PicLeftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PicLeftOutlined: PicLeftOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PicLeftOutlinedSvg} />
    ;

PicLeftOutlined.displayName = 'PicLeftOutlined';

export default FunctionalComponent;