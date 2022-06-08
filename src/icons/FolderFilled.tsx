// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FolderFilledSvg from '@ant-design/icons-svg/lib/asn/FolderFilled';

export interface FolderFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FolderFilled: FolderFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FolderFilledSvg} />;

FolderFilled.displayName = 'FolderFilled';

export default FolderFilled;