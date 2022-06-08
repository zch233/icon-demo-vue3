// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FolderAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderAddOutlined';

export interface FolderAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FolderAddOutlined: FolderAddOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FolderAddOutlinedSvg} />;

FolderAddOutlined.displayName = 'FolderAddOutlined';

export default FolderAddOutlined;