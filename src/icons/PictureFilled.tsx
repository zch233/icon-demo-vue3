// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PictureFilledSvg from '@ant-design/icons-svg/lib/asn/PictureFilled';

export interface PictureFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PictureFilled: PictureFilledIconType = (props, context) => <Icon name='PictureFilled' {...{ ...props, ...context.attrs }} icon={PictureFilledSvg} />;

PictureFilled.displayName = 'PictureFilled';

export default PictureFilled;