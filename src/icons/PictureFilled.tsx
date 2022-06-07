// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PictureFilledSvg from '@ant-design/icons-svg/lib/asn/PictureFilled';

export interface PictureFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PictureFilled: PictureFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PictureFilledSvg} />
    ;

PictureFilled.displayName = 'PictureFilled';

export default FunctionalComponent;