// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DeleteRowOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteRowOutlined';

export interface DeleteRowOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DeleteRowOutlined: DeleteRowOutlinedIconType = (props, context) => <Icon name='DeleteRowOutlined' {...{ ...props, ...context.attrs }} icon={DeleteRowOutlinedSvg} />;

DeleteRowOutlined.displayName = 'DeleteRowOutlined';

export default DeleteRowOutlined;