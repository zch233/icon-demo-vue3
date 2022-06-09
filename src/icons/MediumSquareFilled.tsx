// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MediumSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MediumSquareFilled';

export interface MediumSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MediumSquareFilled: MediumSquareFilledIconType = (props, context) => <Icon name='MediumSquareFilled' {...{ ...props, ...context.attrs }} icon={MediumSquareFilledSvg} />;

MediumSquareFilled.displayName = 'MediumSquareFilled';

export default MediumSquareFilled;