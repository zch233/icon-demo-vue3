// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DropboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxSquareFilled';

export interface DropboxSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DropboxSquareFilled: DropboxSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DropboxSquareFilledSvg} />;

DropboxSquareFilled.displayName = 'DropboxSquareFilled';

export default DropboxSquareFilled;