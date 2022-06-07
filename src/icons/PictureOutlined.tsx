// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PictureOutlinedSvg from '@ant-design/icons-svg/lib/asn/PictureOutlined';

export interface PictureOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PictureOutlined: PictureOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PictureOutlinedSvg} />
    ;

PictureOutlined.displayName = 'PictureOutlined';

export default FunctionalComponent;